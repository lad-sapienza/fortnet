import { Field, RecordProvider, useRecordFetcher } from '@lad-sapienza/scms-core/components/Record';

// bdus5's multi_select fields (typology, chronology) come back as a single
// comma-joined string (e.g. "necropolis,sanctuary/temple"), not an array.
const splitMulti = (value: string | string[]): string[] =>
  Array.isArray(value) ? value : value.split(',').map((v) => v.trim()).filter(Boolean);

const capitalizeJoin = (values: string | string[]) =>
  splitMulti(values)
    .map((v) => v.charAt(0).toUpperCase() + v.slice(1).toLowerCase())
    .join(', ');

interface BdusBibliographyEntry {
  author_year: string;
  pages?: string | null;
  zotero_url?: string;
}

export default function RecordView() {
  const { record, loading, error, table, id } = useRecordFetcher();

  if (loading) {
    return <div style={{ padding: '2rem', opacity: 0.5 }}>Loading record…</div>;
  }

  if (error || !record) {
    return (
      <div style={{ padding: '2rem', color: 'red' }}>
        Record not found for table &ldquo;{table}&rdquo; with ID &ldquo;{id}&rdquo;.
      </div>
    );
  }

  return (
    <RecordProvider record={record}>
      <h2>
        <Field name="site_name" />
      </h2>
      <ul>
        <li>
          <strong>Site ID</strong>: <Field name="site_id" />
        </li>
        <li>
          <strong>Site Name</strong>: <Field name="site_name" />
        </li>
        <li>
          <strong>Ancient name</strong>: <Field name="ancient_name" />
        </li>
        <li>
          <strong>Typology</strong>: <Field name="typology" transformer={capitalizeJoin} />
        </li>
        <li>
          <strong>Chronology</strong>: <Field name="chronology" transformer={(d: string | string[]) => splitMulti(d).join(', ')} />
        </li>
        <li>
          <strong>Description</strong>: <Field name="description_en" />
        </li>
      </ul>
      <hr />
      <p>
        <strong>Bibliographic references</strong>:
      </p>
      <ul>
        <Field
          name="_bibliography"
          transformer={(refs: Record<string, BdusBibliographyEntry> | BdusBibliographyEntry[]) => {
            const entries = Object.values(refs);
            if (entries.length === 0) return <li>No bibliographic references yet.</li>;
            return entries.map((r, i) => (
              <li key={i}>
                {r.zotero_url ? (
                  <a href={r.zotero_url} target="_blank" rel="noreferrer">
                    {r.author_year}
                  </a>
                ) : (
                  r.author_year
                )}
                {r.pages ? `, ${r.pages}` : ''}
              </li>
            ));
          }}
        />
      </ul>
      <hr />
      <p>
        👉 Back to the <a href="/atlas/">📍 Archaeological Atlas</a>.
      </p>
    </RecordProvider>
  );
}
