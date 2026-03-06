import { createAppSlice } from "@/lib/CreateAppSlice";

export interface CategoryType {
  id: number
  name: string
  slug: string
}

export interface ProductType {
  id: number
  category: CategoryType
  name: string
  slug: string
  description: string
  price: string
  image: string
  is_original: boolean
  created_at: string  
}

interface ProductState {
  products: ProductType[];
  category: CategoryType[]
  loading: boolean;
  loadingCat: boolean;
  error: string;
}

const initialState: ProductState = {
  products: [],
  category:[],
  loading: true,
  loadingCat: true,
  error: "",
};

export const productSlice = createAppSlice({
  name: "product",
  initialState,
  reducers: {
    SetProducts: (state, action) => {
      state.products = action.payload;
      state.loading = false
    },
    SetCategory: (state, action) => {
      state.category = action.payload;
      state.loadingCat = false
    },
    
  },
});

export const { SetProducts,SetCategory } = productSlice.actions;
export default productSlice.reducer;
