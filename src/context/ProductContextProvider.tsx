import { createContext, useContext } from "react";

type ProductContextType = {
  handleRemoveItem: (id: number) => void;
};

type ProductContextProviderProps = {
  handleRemoveItem: (id: number) => void;
  children: React.ReactNode;
};

// CREATE CONTEXT
export const ProductContext = createContext<ProductContextType | null>(null);

// PROVIDE
const ProductContextProvider = ({
  children,
  handleRemoveItem,
}: ProductContextProviderProps) => {
  return (
    <ProductContext.Provider value={{ handleRemoveItem }}>
      {children}
    </ProductContext.Provider>
  );
};

// USE CONTEXT
export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("Product Card must be inside Product Context Provider.");
  }
  return context;
};

export default ProductContextProvider;
