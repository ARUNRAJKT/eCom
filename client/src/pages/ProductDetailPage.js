import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import NavBar from '../components/Navbar';
import PageHeading from '../components/PageHeading';
import ProductDetail from '../components/ProductDetail';
import Sidebar from '../components/Sidebar';
import Cart from '../components/Cart';
import Loading from '../components/Loading';
import { setProductDetail, resetProductDetail } from '../redux/actions/productActions';

const ProductDetailPage = () => {
  const { id } = useParams();
  const productDetail = useSelector((state) => state.allProducts.productDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(setProductDetail(id));
    }

    return () => {
      dispatch(resetProductDetail());
    };
  }, [id, dispatch]); // Ensure `id` and `dispatch` are part of dependency array

  return (
    <>
      <NavBar />
      <PageHeading title="Home / Product" />
      {Object.keys(productDetail).length === 0 ? (
        <Loading />
      ) : (
        <ProductDetail details={productDetail} />
      )}
      <Sidebar />
      <Cart />
    </>
  );
};

export default ProductDetailPage;
