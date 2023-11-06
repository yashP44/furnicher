import { setLoading, setProducts } from "../store/productslice";

export const fetchData = async (dispatch) => {
    dispatch(setLoading(true));

    try {
        // const response = await fetch('https://api.escuelajs.co/api/v1/products');
        const response = await fetch('https://fakestoreapi.com/products?limit=50');
        const data = await response.json();

        if (Array.isArray(data)) {
            const limitedData = data.slice(0, 100);
            dispatch(setProducts(limitedData));
        } else {
            console.error('Data received is not an array');
        }

        dispatch(setLoading(false));
    } catch (error) {
        console.error('Error fetching data:', error);
        dispatch(setLoading(false));
    }
};