// import { useSelector } from "react-redux";
// import { products } from "../data/data";
import { addCartItem, removeCartItem, increaseQuantity, decreaseQuantity } from "../redux/cartItemsSlice";

export const handleAddToCart = (action, id, dispatch, quantity) => {
    const item = {
        id: id,
        quantity: quantity,
    };
    switch (action) {
        case "add-item":
            dispatch(addCartItem(item));
            break;
        case "remove-item":
            dispatch(removeCartItem(item));
            break;

        case "increase":
            dispatch(increaseQuantity(item));
            break;

        case "decrease":
            dispatch(decreaseQuantity(item));
            break;

        default:
            break;
    }
};

export const handleGetCart = (listItems, products = []) => {
    let total = 0;
    const result = listItems.map((item) => {
        const temp = products.filter((product) => product.id === item.id)[0];
        // console.log(item);
        total += temp?.price * item.quantity;
        return {
            id: temp?.id,
            name: temp?.name,
            image: temp?.images[0],
            url: temp?.url || "",
            quantity: item.quantity,
            price: temp?.price,
        };
    });

    return {
        total: total,
        cartItems: result,
    };
};
