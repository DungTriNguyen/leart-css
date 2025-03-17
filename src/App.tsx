import ComponentAddNewProduct from "./ComponentTestCallApiUseEffect/ComponentAddNewProduct";
import ComponentAllProduct from "./ComponentTestCallApiUseEffect/ComponentAllProduct";
import ComponentDeleteProduct from "./ComponentTestCallApiUseEffect/ComponentDeleteProduct";
import ComponentGetProductCategory from "./ComponentTestCallApiUseEffect/ComponentGetProductCategory";
import ComponentGetProductID from "./ComponentTestCallApiUseEffect/ComponentGetProductID";
import ComponentSearchProduct from "./ComponentTestCallApiUseEffect/ComponentSearchProduct";
import ComponentSkipAndLimitProduct from "./ComponentTestCallApiUseEffect/ComponentSkipAndLimitProduct";
import ComponentSortProduct from "./ComponentTestCallApiUseEffect/ComponentSortProduct";
import ComponentUpdatePATChProduct from "./ComponentTestCallApiUseEffect/ComponentUpdatePATCHProduct";

import ComponentUpdatePUTProduct from "./ComponentTestCallApiUseEffect/ComponentUpdatePUTProduct";

function App() {
  const getProductId: number = 5;
  return (
    <>
      <ComponentAllProduct />
      <ComponentGetProductID getProductId={getProductId} />
      <ComponentSearchProduct />
      <ComponentSkipAndLimitProduct />
      <ComponentSortProduct />
      <ComponentGetProductCategory />
      <ComponentAddNewProduct />
      <ComponentUpdatePUTProduct />
      <ComponentUpdatePATChProduct />
      <ComponentDeleteProduct />
    </>
  );
}

export default App;
