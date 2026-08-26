export default  async function Page({ params }: { params: { memeID: string; memename: string; memeage: string } }) {
  const { memeID,memename,memeage } = await params;
  return (
    <div>
        <h1>
           Vip Member Page
        </h1>
        <p>Memeber ID: {memeID}</p>
        <p>Member Name: {memename}</p>
        <p>Age: {memeage}</p>
    </div>
  );
}