import React from 'react';
import { NavLink } from 'react-router-dom';

const SideNavCatalogPart = () => {
    return (
        <section className="nav-link">
            <NavLink activeClassName="active-page" to="/catalog" className="font">
                <div className="icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.97276 1.40781C11.3312 1.40781 12.4363 2.29191 12.4363 3.37859H14.1961C14.1961 1.51564 12.3015 0 9.97276 0C7.64407 0 5.74951 1.51564 5.74951 3.37859H7.50927C7.50927 2.29191 8.6144 1.40781 9.97276 1.40781Z"
                            fill="black"
                        />
                        <path
                            d="M19.9391 19.2187L18.7686 4.73303C18.7419 4.36053 18.3566 4.06934 17.8901 4.06934H2.05309C1.58669 4.06934 1.2013 4.36053 1.17461 4.73303L0.00144136 19.2561C-0.0124021 19.4494 0.0739434 19.6388 0.240181 19.7796C0.406361 19.9204 0.63777 20.0001 0.879854 20.0001H19.0632C19.0637 20.0001 19.0641 20.0001 19.0644 20.0001C19.5504 20.0001 19.9443 19.685 19.9443 19.2962C19.9444 19.2701 19.9425 19.2442 19.9391 19.2187ZM8.24057 6.30696C8.24057 6.79908 7.74191 7.19801 7.12676 7.19801C6.51161 7.19801 6.01295 6.79908 6.01295 6.30696V5.79982C6.01295 5.3077 6.51161 4.90877 7.12676 4.90877C7.74191 4.90877 8.24057 5.3077 8.24057 5.79982V6.30696ZM13.9315 6.30696C13.9315 6.79908 13.4327 7.19801 12.8176 7.19801C12.2025 7.19801 11.7038 6.79908 11.7038 6.30696V5.79982C11.7038 5.3077 12.2025 4.90877 12.8176 4.90877C13.4327 4.90877 13.9315 5.3077 13.9315 5.79982V6.30696Z"
                            fill="black"
                        />
                    </svg>
                </div>
                <div className="list-name">Каталог</div>
                <div className="font-block-hover">
                    <NavLink activeClassName="active-page" to="/catalog" className="hover__block">
                        <div className="hover__block--icon">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.97276 1.40781C11.3312 1.40781 12.4363 2.29191 12.4363 3.37859H14.1961C14.1961 1.51564 12.3015 0 9.97276 0C7.64407 0 5.74951 1.51564 5.74951 3.37859H7.50927C7.50927 2.29191 8.6144 1.40781 9.97276 1.40781Z"
                                    fill="black"
                                />
                                <path
                                    d="M19.9391 19.2187L18.7686 4.73303C18.7419 4.36053 18.3566 4.06934 17.8901 4.06934H2.05309C1.58669 4.06934 1.2013 4.36053 1.17461 4.73303L0.00144136 19.2561C-0.0124021 19.4494 0.0739434 19.6388 0.240181 19.7796C0.406361 19.9204 0.63777 20.0001 0.879854 20.0001H19.0632C19.0637 20.0001 19.0641 20.0001 19.0644 20.0001C19.5504 20.0001 19.9443 19.685 19.9443 19.2962C19.9444 19.2701 19.9425 19.2442 19.9391 19.2187ZM8.24057 6.30696C8.24057 6.79908 7.74191 7.19801 7.12676 7.19801C6.51161 7.19801 6.01295 6.79908 6.01295 6.30696V5.79982C6.01295 5.3077 6.51161 4.90877 7.12676 4.90877C7.74191 4.90877 8.24057 5.3077 8.24057 5.79982V6.30696ZM13.9315 6.30696C13.9315 6.79908 13.4327 7.19801 12.8176 7.19801C12.2025 7.19801 11.7038 6.79908 11.7038 6.30696V5.79982C11.7038 5.3077 12.2025 4.90877 12.8176 4.90877C13.4327 4.90877 13.9315 5.3077 13.9315 5.79982V6.30696Z"
                                    fill="black"
                                />
                            </svg>
                        </div>
                        <div className="hover__block--text">Каталог</div>
                    </NavLink>
                </div>
            </NavLink>
        </section>
    );
};

export default SideNavCatalogPart;
