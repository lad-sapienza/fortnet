import { useEffect, useState } from 'react';
import { Map } from '@lad-sapienza/scms-core/components/Map';

const DIRECTUS_URL = (import.meta.env.PUBLIC_DIRECTUS_URL ?? '').replace(/\/$/, '');
const DIRECTUS_TOKEN = import.meta.env.PUBLIC_DIRECTUS_TOKEN ?? '';

interface SitesFeatureCollection {
  type: 'FeatureCollection';
  features: GeoJSON.Feature[];
}

/**
 * Fetches the "sites" Directus data itself (instead of using <Map directus={{...}}>)
 * so that array-valued fields (typology, chronology) can be joined into plain
 * display strings before they reach MapLibre. MapLibre's GeoJSON source
 * JSON.stringifies any non-primitive property value (vector tiles only support
 * string/number/boolean), which otherwise renders as `["fortified settlement"]`
 * in the popup instead of "fortified settlement".
 */
export default function AtlasMap() {
  const [sites, setSites] = useState<SitesFeatureCollection | null>(null);

  useEffect(() => {
    const fields = 'id,site_name,typology,chronology,coordinates';
    const url = `${DIRECTUS_URL}/items/sites?filter[typology][_icontains]=fort&limit=-1&fields=${fields}`;
    const headers: Record<string, string> = {};
    if (DIRECTUS_TOKEN) headers.Authorization = `Bearer ${DIRECTUS_TOKEN}`;

    fetch(url, { headers })
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((json) => {
        const features: GeoJSON.Feature[] = (json.data ?? [])
          .filter((item: any) => item.coordinates)
          .map((item: any) => ({
            type: 'Feature',
            id: item.id,
            geometry: item.coordinates,
            properties: {
              id: item.id,
              site_name: item.site_name,
              typology: Array.isArray(item.typology) ? item.typology.join(', ') : (item.typology ?? ''),
              chronology: Array.isArray(item.chronology) ? item.chronology.join(', ') : (item.chronology ?? ''),
            },
          }));
        setSites({ type: 'FeatureCollection', features });
      })
      .catch((err) => console.error('AtlasMap: failed to load sites', err));
  }, []);

  return (
    <Map
      center="20.12367,39.68117,10"
      mapStyle="/data/fortnet.json"
      height="600px"
      navigationControl="top-left"
      scaleControl="bottom-left"
      fullscreenControl="top-right"
      layerControl="top-right"
      vectorLayers={
        sites
          ? [
              {
                name: 'Archaeological Sites',
                source: { type: 'geojson', data: sites },
                fitToContent: false,
                searchInFields: {
                  site_name: 'Site name',
                  typology: 'Typology',
                  chronology: 'Chronology',
                },
                style: {
                  type: 'circle',
                  paint: {
                    'circle-radius': 8,
                    'circle-color': '#1e40af',
                    'circle-opacity': 0.85,
                    'circle-stroke-width': 1,
                    'circle-stroke-color': '#ffffff',
                    'circle-stroke-opacity': 0.95,
                  },
                },
                popupTemplate:
                  "<h4>${site_name}</h4><ul><li>Typology: ${typology}</li><li>Chronology: ${chronology}</li></ul><p class='text-center'><a class='btn btn-primary btn-sm' href='/record/?table=sites&id=${id}'>Details</a></p>",
              },
            ]
          : []
      }
    />
  );
}
