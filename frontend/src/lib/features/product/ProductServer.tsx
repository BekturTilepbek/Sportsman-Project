import axios from "axios";
import { SetCategory, SetProducts } from "./ProductSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

export const useProduct = () => {
  const dispatch = useAppDispatch();
  const {loading} = useAppSelector(state => state.product)


  async function GetProducts() {
    try {
      const {data} = await axios.get("/api/products");
      dispatch(SetProducts(data));
    } catch (error) {
      console.error("Ошибка загрузки продуктов:", error);
    }
  }

    async function SearchProducts(slug:string) {
    try {
      const {data} = await axios.get(`/api/products/${slug}`);

      dispatch(SetProducts([data]));
    } catch (error) {
      console.error("Ошибка загрузки продуктов:", error);
    }
  }
  async function SearchCategoryProducts(slug: string) {
    try {
      const { data } = await axios.get(`/api/products?category=${slug}`);
      dispatch(SetProducts(data)); // уже массив
    } catch (error) {
      console.error("Ошибка фильтра по категории:", error);
    }
  }
    async function GetSearchCategoryProducts() {
    try {
      const {data} = await axios.get(`/api/categories/`);


      dispatch(SetCategory(data));
    } catch (error) {
      console.error("Ошибка загрузки продуктов:", error);
    }
  }

  

  return { GetProducts,SearchProducts,SearchCategoryProducts,GetSearchCategoryProducts };
};
