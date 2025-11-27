import Grid from "@/components/grid/Grid";
import Head from "next/head";

export default function ActionPage() {

  return (
    <>
      <Head><title>Raccoon Street — Action</title></Head>

      <div className="container py-4">
        <div className="d-flex align-items-center justify-content-between mb-2">
          <h1 className="h5 mb-0">Action</h1>
          <div className="container 100vh">
            <button className="btn btn-sm btn-outline-secondary me-2">Export</button>
            <button className="btn btn-sm btn-primary">Save</button>
            <Grid cell={16} stroke="#ffffffff" opacity={0.2} />
          </div>
          
          </div>
          </div>
    </>
  );
}
