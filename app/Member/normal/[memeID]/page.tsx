export default  async function Page({ params }: { params: { memeID: string } }) {
  const { memeID } = params;

  return (
    <div>
        <h1>
           Normal Member Page
        </h1>
        <p>Member ID: {memeID}</p>
    </div>
  );
}