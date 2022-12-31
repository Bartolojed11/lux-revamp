import Link from "next/link";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

// third parties
import { useSelector, useDispatch } from "react-redux";

// redux
import { initialCartCount } from "../redux/features/cartCounterSlice";

import { Bag, Heart, HouseDoor, Person } from "react-bootstrap-icons";

// utils
import { requestOptions } from "../utils/requestOptions";

export default function Footer() {
  const cartCount = useSelector((state) => state.cartCounter.cart_count);
  let [token, setToken] = useState("");

  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      setToken(session.user.accessToken);
    }
  }, [status]);

  const dispatch = useDispatch();
  useEffect(() => {
    const url = process.env.apiUrl + "cart/count";
    if (status === "authenticated" && token !== "") {
      fetch(url, requestOptions("GET", {}, { token: token }))
        .then((response) => response.json())
        .then((response) => {
          if (response.status === "success") {
            dispatch(initialCartCount(response.total_count));
          }
        });
    }
  }, [status, token]);

  return (
    <div className="footer">
      <Link href="/">
        <HouseDoor />
      </Link>
      <Link href="/favorites">
        <Heart />
      </Link>
      <Link href={status === "authenticated" ? "/profile" : "/login"}>
        <Person />
      </Link>
      <Link href="/my-cart" className="cart__link lineheight-0">
        <span className="cart_count_container">
          <div className="cart_count">{cartCount}</div>
        </span>
        <Bag />
      </Link>
    </div>
  );
}
