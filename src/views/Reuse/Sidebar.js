import React, { useState, useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router';

export default function Sidebar() {
    const navigate = useNavigate();

    const path = window.location.pathname?.split('/')



    return (
        <div>
            <ul className="sidebar-list">
                <li>
                    <a onClick={() => navigate('/home')} className="active">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7 23.3333C8.933 23.3333 10.5 21.7663 10.5 19.8333C10.5 17.9003 8.933 16.3333 7 16.3333C5.067 16.3333 3.5 17.9003 3.5 19.8333C3.5 21.7663 5.067 23.3333 7 23.3333Z"
                                stroke="#D8A4EE" stroke-width="1.75" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path
                                d="M18.6667 23.3333C20.5997 23.3333 22.1667 21.7663 22.1667 19.8333C22.1667 17.9003 20.5997 16.3333 18.6667 16.3333C16.7338 16.3333 15.1667 17.9003 15.1667 19.8333C15.1667 21.7663 16.7338 23.3333 18.6667 23.3333Z"
                                stroke="#D8A4EE" stroke-width="1.75" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M10.5 19.8333V4.66667H22.1667V19.8333" stroke="#D8A4EE"
                                stroke-width="1.75" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M10.5 9.33333H22.1667" stroke="#D8A4EE" stroke-width="1.75"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        Home
                    </a>
                </li>
                <li>
                    <a onClick={() => navigate('/category')}>
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.3333 23.3333C18.2662 23.3333 19.8333 21.7663 19.8333 19.8333C19.8333 17.9003 18.2662 16.3333 16.3333 16.3333C14.4003 16.3333 12.8333 17.9003 12.8333 19.8333C12.8333 21.7663 14.4003 23.3333 16.3333 23.3333Z"
                                stroke="#D8A4EE" stroke-width="1.75" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M19.8333 19.8333V4.66667H24.4999" stroke="#D8A4EE"
                                stroke-width="1.75" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M15.1667 5.83333H3.5" stroke="#D8A4EE" stroke-width="1.75"
                                stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M3.5 10.5H15.1667" stroke="#D8A4EE" stroke-width="1.75"
                                stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10.5 15.1667H3.5" stroke="#D8A4EE" stroke-width="1.75"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        New Movie
                    </a>
                </li>
                <li>
                    <a onClick={() => navigate('/actor')}>
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8.16675 15.1667H7.00008C5.71142 15.1667 4.66675 16.2113 4.66675 17.5V21C4.66675 22.2887 5.71142 23.3333 7.00008 23.3333H8.16675C9.45541 23.3333 10.5001 22.2887 10.5001 21V17.5C10.5001 16.2113 9.45541 15.1667 8.16675 15.1667Z"
                                stroke="#D8A4EE" stroke-width="1.75" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path
                                d="M21 15.1667H19.8333C18.5447 15.1667 17.5 16.2113 17.5 17.5V21C17.5 22.2887 18.5447 23.3333 19.8333 23.3333H21C22.2887 23.3333 23.3333 22.2887 23.3333 21V17.5C23.3333 16.2113 22.2887 15.1667 21 15.1667Z"
                                stroke="#D8A4EE" stroke-width="1.75" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path
                                d="M4.66675 17.5V14C4.66675 11.5246 5.65008 9.15067 7.40042 7.40033C9.15076 5.64999 11.5247 4.66666 14.0001 4.66666C16.4754 4.66666 18.8494 5.64999 20.5997 7.40033C22.3501 9.15067 23.3334 11.5246 23.3334 14V17.5"
                                stroke="#D8A4EE" stroke-width="1.75" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>

                        Actors Collection
                    </a>
                </li>
                <li>
                    <a onClick={() => navigate('/singer')}>
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8.16675 15.1667H7.00008C5.71142 15.1667 4.66675 16.2113 4.66675 17.5V21C4.66675 22.2887 5.71142 23.3333 7.00008 23.3333H8.16675C9.45541 23.3333 10.5001 22.2887 10.5001 21V17.5C10.5001 16.2113 9.45541 15.1667 8.16675 15.1667Z"
                                stroke="#D8A4EE" stroke-width="1.75" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path
                                d="M21 15.1667H19.8333C18.5447 15.1667 17.5 16.2113 17.5 17.5V21C17.5 22.2887 18.5447 23.3333 19.8333 23.3333H21C22.2887 23.3333 23.3333 22.2887 23.3333 21V17.5C23.3333 16.2113 22.2887 15.1667 21 15.1667Z"
                                stroke="#D8A4EE" stroke-width="1.75" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path
                                d="M4.66675 17.5V14C4.66675 11.5246 5.65008 9.15067 7.40042 7.40033C9.15076 5.64999 11.5247 4.66666 14.0001 4.66666C16.4754 4.66666 18.8494 5.64999 20.5997 7.40033C22.3501 9.15067 23.3334 11.5246 23.3334 14V17.5"
                                stroke="#D8A4EE" stroke-width="1.75" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>

                        Singers Collection
                    </a>
                </li>
                <li>
                    <a onClick={() => navigate('/favourite')}>
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M22.75 15.834L14 24.5L5.25003 15.834M5.25003 15.834C4.67288 15.2724 4.21828 14.5974 3.91483 13.8514C3.61139 13.1055 3.46568 12.3048 3.48689 11.4998C3.50809 10.6947 3.69575 9.90283 4.03804 9.17389C4.38034 8.44496 4.86985 7.7948 5.47576 7.26434C6.08167 6.73389 6.79085 6.33464 7.55864 6.09173C8.32643 5.84882 9.1362 5.76752 9.93695 5.85294C10.7377 5.93836 11.5121 6.18865 12.2114 6.58806C12.9107 6.98747 13.5196 7.52734 14 8.17367C14.4825 7.53203 15.0922 6.99688 15.791 6.60171C16.4898 6.20654 17.2626 5.95986 18.0611 5.87711C18.8596 5.79436 19.6666 5.87732 20.4316 6.12079C21.1966 6.36427 21.9031 6.76302 22.5068 7.29209C23.1106 7.82116 23.5987 8.46917 23.9405 9.19554C24.2823 9.92192 24.4706 10.711 24.4934 11.5135C24.5162 12.316 24.3732 13.1145 24.0732 13.8591C23.7732 14.6038 23.3228 15.2785 22.75 15.841"
                                stroke="#D8A4EE" stroke-width="1.75" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>


                        Favourites
                    </a>
                </li>
                {/* <li>
                    <a href="#">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12.0458 5.0365C12.5428 2.98783 15.4572 2.98783 15.9542 5.0365C16.0287 5.34427 16.1749 5.63008 16.3808 5.87067C16.5867 6.11126 16.8465 6.29983 17.1391 6.42104C17.4317 6.54224 17.7487 6.59266 18.0644 6.56818C18.3801 6.5437 18.6856 6.44502 18.956 6.28017C20.7562 5.1835 22.8177 7.24383 21.721 9.04517C21.5564 9.31543 21.4579 9.62073 21.4334 9.93624C21.409 10.2517 21.4594 10.5686 21.5804 10.8609C21.7015 11.1533 21.8899 11.413 22.1302 11.6189C22.3705 11.8248 22.656 11.9711 22.9635 12.0458C25.0122 12.5428 25.0122 15.4572 22.9635 15.9542C22.6557 16.0287 22.3699 16.1749 22.1293 16.3808C21.8887 16.5867 21.7002 16.8465 21.579 17.1391C21.4578 17.4317 21.4073 17.7487 21.4318 18.0644C21.4563 18.3801 21.555 18.6856 21.7198 18.956C22.8165 20.7562 20.7562 22.8177 18.9548 21.721C18.6846 21.5564 18.3793 21.4579 18.0638 21.4334C17.7483 21.409 17.4314 21.4594 17.1391 21.5804C16.8467 21.7015 16.587 21.8899 16.3811 22.1302C16.1752 22.3705 16.0289 22.656 15.9542 22.9635C15.4572 25.0122 12.5428 25.0122 12.0458 22.9635C11.9713 22.6557 11.8251 22.3699 11.6192 22.1293C11.4133 21.8887 11.1535 21.7002 10.8609 21.579C10.5683 21.4578 10.2513 21.4073 9.93558 21.4318C9.61986 21.4563 9.31438 21.555 9.044 21.7198C7.24383 22.8165 5.18233 20.7562 6.279 18.9548C6.44362 18.6846 6.54214 18.3793 6.56656 18.0638C6.59099 17.7483 6.54062 17.4314 6.41955 17.1391C6.29848 16.8467 6.11014 16.587 5.86982 16.3811C5.6295 16.1752 5.34399 16.0289 5.0365 15.9542C2.98783 15.4572 2.98783 12.5428 5.0365 12.0458C5.34427 11.9713 5.63008 11.8251 5.87067 11.6192C6.11126 11.4133 6.29983 11.1535 6.42104 10.8609C6.54224 10.5683 6.59266 10.2513 6.56818 9.93558C6.5437 9.61986 6.44502 9.31438 6.28017 9.044C5.1835 7.24383 7.24383 5.18233 9.04517 6.279C10.2118 6.98833 11.7238 6.36067 12.0458 5.0365Z"
                                stroke="#D8A4EE" stroke-width="1.75" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path
                                d="M14 17.5C15.933 17.5 17.5 15.933 17.5 14C17.5 12.067 15.933 10.5 14 10.5C12.067 10.5 10.5 12.067 10.5 14C10.5 15.933 12.067 17.5 14 17.5Z"
                                stroke="#D8A4EE" stroke-width="1.75" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>

                        Settings
                    </a>
                </li> */}
                <li>
                    <a onClick={e => {
                        e.preventDefault()
                        localStorage.removeItem('demoPreviewToken')
                        navigate('/login')
                    }}>
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.3333 9.33333V7C16.3333 6.38116 16.0875 5.78767 15.6499 5.35008C15.2123 4.9125 14.6188 4.66666 14 4.66666H5.83333C5.21449 4.66666 4.621 4.9125 4.18342 5.35008C3.74583 5.78767 3.5 6.38116 3.5 7V21C3.5 21.6188 3.74583 22.2123 4.18342 22.6499C4.621 23.0875 5.21449 23.3333 5.83333 23.3333H14C14.6188 23.3333 15.2123 23.0875 15.6499 22.6499C16.0875 22.2123 16.3333 21.6188 16.3333 21V18.6667" stroke="#D8A4EE" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M8.16675 14H24.5001L21.0001 10.5M21.0001 17.5L24.5001 14" stroke="#D8A4EE" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        Logout
                    </a>
                </li>
            </ul>
        </div>
    )
}