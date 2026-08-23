import { useRecordFetcher } from '@lad-sapienza/scms-core/components/Record/useRecordFetcher';
import { Field, RecordProvider } from '@lad-sapienza/scms-core/components/Record';

const capitalizeJoin = (values: string[]) =>
  values.map((v) => v.charAt(0).toUpperCase() + v.slice(1).toLowerCase()).join(', ');

interface BibliographicReference {
  zotero: string;
  details: string;
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
          <strong>Chronology</strong>: <Field name="chronology" transformer={(d: string[]) => d.join(', ')} />
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
          name="bibligraphic_references"
          transformer={(refs: BibliographicReference[]) =>
            refs.map((r, i) => (
              <li key={i}>
                {r.zotero}, {r.details}
              </li>
            ))
          }
        />
      </ul>
      <hr />
      <p>
        👉 Back to the <a href="/atlas/">📍 Archaeological Atlas</a>.
      </p>
    </RecordProvider>
  );
}
