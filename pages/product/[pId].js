import fs from "fs/promises";
import path from "path";
function showDetails({ item }) {
  if (!item) {
    return <h2>Loading....</h2>;
  }
  return (
    <div>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
    </div>
  );
}
async function getData() {
  const pathName = path.join(process.cwd(), "dummyData.json");
  const jsonData = await fs.readFile(pathName);
  return JSON.parse(jsonData);
}
export async function getStaticProps(context) {
  const { params } = context;
  const productPId = params.pId;
  const data = await getData();
  const productItem = data.products.find(
    (productItem) => productItem.id === productPId
  );
  if (!productItem) {
    return { notFound: true };
  }
  return {
    props: { item: productItem },
  };
}
export async function getStaticPaths() {
  const data = await getData();
  const allPath = data.products.map((product) => ({
    params: { pId: product.id },
  }));
  return {
    paths: [allPath[0]],
    fallback: true,
  };
}
export default showDetails;
