import { Map } from '@lad-sapienza/scms-core/components/Map';

interface SitesFeatureCollection {
  type: 'FeatureCollection';
  features: GeoJSON.Feature[];
}

export interface AtlasMapProps {
  /**
   * Pre-fetched sites, built at build time (see atlas.astro) from bdus5 via
   * `bdusToFeatureCollection`. Fetching per-row geometry for 250+ sites is
   * one HTTP request per row — too expensive to run in the browser on every
   * page view, so it happens once at build time instead of here.
   */
  sites: SitesFeatureCollection;
}

/**
 * Renders the "sites" overlay directly from a pre-built FeatureCollection
 * (instead of `<Map directus={{...}}>`/`bdus={{...}}` shorthand) so that
 * multi-value fields (typology, chronology) can be joined into plain display
 * strings before they reach MapLibre. MapLibre's GeoJSON source
 * JSON.stringifies any non-primitive property value (vector tiles only
 * support string/number/boolean), which otherwise renders as
 * `["fortified settlement"]` in the popup instead of "fortified settlement".
 */
export default function AtlasMap({ sites }: AtlasMapProps) {
  return (
    <Map
      center="20.12367,39.68117,10"
      mapStyle="/data/fortnet.json"
      height="600px"
      navigationControl="top-left"
      scaleControl="bottom-left"
      fullscreenControl="top-right"
      layerControl="top-right"
      overlayLayers={[
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
      ]}
    />
  );
}
