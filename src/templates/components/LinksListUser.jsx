import { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { roles } from '../../helpers/helper'
import { AuthContext } from '../../hooksAndProviders/AuthContextProvider'
const LinksListUser = () => {
    const auth = useContext(AuthContext)
    const location = useLocation()
    const path_name = location.pathname
    return (
        <>
            <ul className="df flex-1 center ">
                <li className={`h2 df pointer pl-4 pr-4 font-2 bold-500 text-dark navigation-tab column ${path_name === '/' ? " tab-active" : ""}`}><Link className='text-dark' to="/"> HOME</Link><span className='active-underline' /></li>
                {(!auth.isSignedIn || (auth.isSignedIn && auth.user.role !== roles.MERCHENT_USER)) && <li className={`h2 df pointer pl-4 pr-4 font-2 bold-500 text-dark navigation-tab column ${path_name === '/journey' ? " tab-active" : ""}`}><Link className='text-dark' to="/journey"> THE JOURNEY</Link><span className='active-underline' /></li>}
                {(!auth.isSignedIn || (auth.isSignedIn && auth.user.role !== roles.MERCHENT_USER)) && <li className={`h2 df pointer pl-4 pr-4 font-2 bold-500 text-dark navigation-tab column ${path_name === '/team' ? " tab-active" : ""}`}><Link className='text-dark' to="/team"> TEAM</Link><span className='active-underline' /></li>}
                <li className={`h2 df pointer pl-4 pr-4 font-2 bold-500 text-dark navigation-tab column ${path_name.slice(0, 6) === '/store' ? " tab-active" : ""}`}><Link className='text-dark' to="/store"> STORE</Link><span className='active-underline' /></li>
                {(!auth.isSignedIn || (auth.isSignedIn && auth.user.role !== roles.MERCHENT_USER)) && <li className={`h2 df pointer pl-4 pr-4 font-2 bold-500 text-dark navigation-tab column ${path_name === '/contact' ? " tab-active" : ""}`}><Link className='text-dark' to="/contact"> CONTACT</Link><span className='active-underline' /></li>}

                {auth.isSignedIn && auth.user.role === roles.MERCHENT_USER &&


                    <>
                        <li className={`h2 df pointer pl-4 pr-4 font-2 bold-500 text-dark navigation-tab column ${path_name === '/admin/get-product' ? " tab-active" : ""}`}><Link className='text-dark' to="/admin/get-product"> PRODUCTS</Link><span className='active-underline' /></li>
                        <li className={`h2 df pointer pl-4 pr-4 font-2 bold-500 text-dark navigation-tab column ${path_name === '/admin/create-product' ? " tab-active" : ""}`}><Link className='text-dark' to="/admin/create-product"> CREATE PRODUCT</Link><span className='active-underline' /></li>
                        <li className={`h2 df pointer pl-4 pr-4 font-2 bold-500 text-dark navigation-tab column ${path_name === '/admin/get-customizes' ? " tab-active" : ""}`}><Link className='text-dark' to="/admin/get-customizes">  Customizes</Link><span className='active-underline' /></li>
                        <li className={`h2 df pointer pl-4 pr-4 font-2 bold-500 text-dark navigation-tab column ${path_name === '/admin/create-customizes' ? " tab-active" : ""}`}><Link className='text-dark' to="/admin/create-customizes">  Customize Product</Link><span className='active-underline' /></li>
                        <li className={`h2 df pointer pl-4 pr-4 font-2 bold-500 text-dark navigation-tab column ${path_name === '/admin/orders' ? " tab-active" : ""}`}><Link className='text-dark' to="/admin/orders"> Orders</Link><span className='active-underline' /></li>

                    </>
                }
            </ul>
        </>
    )
}
export default LinksListUser