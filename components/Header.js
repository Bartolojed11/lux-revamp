import Link from "next/link";
import Logo from "./../public/images/logo/logo-large.png";
import { Form } from "react-bootstrap";
import { Router, Search } from "react-bootstrap-icons";
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'


export default function Header({ nonHomePage = false }) {
  const nonHomePageNavbar = "navbar-non-home";

  const [keyword, setKeyword] = useState('')
  const [searchUrl, setSearchUrl] = useState('')

  const router = useRouter();

  function searchProduct(e) {
    e.preventDefault()

    router.push(searchUrl)
  }

  function handleInput(event) {
    setKeyword(() => event.target.value)
  }

  // This is done to capture the last character inputted on the input field
  useEffect(() => {
    setSearchUrl(() => {
      return `/search?keyword=${keyword}`
    })
  }, [keyword])


  return (
    <nav className="navbar">
      <Link href="/">
        <a className="shop-logo-wrapper">
          <Image
            src={Logo}
            alt="shop-logo"
            layout="fill"
            className="nxt-img"
          />
        </a>
      </Link>
      <div className="navbar-search-wrapper">
        <Form action="/search/" method="get" onSubmit={searchProduct}>
          <Form.Control
            type="text"
            placeholder="Search here..."
            className="navbar-search"
            onChange={handleInput}
            value={keyword}
          />
          <div className="search-icon">
            <button type="submit" className="btn-crystal p-0">
              <Search />
            </button>
          </div>
        </Form>
      </div>
    </nav>
  );
}
