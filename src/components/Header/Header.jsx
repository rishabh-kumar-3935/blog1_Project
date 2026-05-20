import React from 'react'
import Container from "../container/Container"
import Logo from "../Logo"
import {Link} from "react-router-dom"
import LogoutBtn from './LogoutBtn'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


function Header() {
    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate()

    const navItems = [
        {
            name: "Home",
            slug: "/",
            active: true
        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus
        }
    ]

  return (
    <header className='h-16 shadow bg-gray-500'>
        <Container>
            <nav className='flex items-center h-full'>
                <div className='mr-4 flex-shrink-0 flex items-center'>
                    <Link to="/">
                        <Logo width='auto' height='32px' />
                    </Link>
                </div>
                <ul className='flex ml-auto items-center space-x-2 h-full'>
                    {
                        navItems.map((item) => item.active ? (
                            <li key={item.name} className='flex items-center h-full'>
                                <button
                                onClick={() => navigate(item.slug)}
                                className='inline-flex items-center justify-center h-10 px-4 duration-200 hover:bg-blue-100 rounded-full whitespace-nowrap'
                                >
                                    {item.name}
                                </button>
                            </li>
                        ) : null)
                    }
                    {authStatus && (
                        <li className='flex items-center h-full'>
                            <LogoutBtn />
                        </li>
                    )}
                </ul>
            </nav>
        </Container>
    </header>
  )
}

export default Header