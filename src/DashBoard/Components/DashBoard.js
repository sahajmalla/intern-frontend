import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProductCategory from "../../Product-Category/Components/ProductCategory";
import addProductForm from "../../product/Add-Product-Form/Components/addProductForm";
import PendingProducts from "../../product/Pending-Products/Components/PendingProducts";
import VerifiedProducts from "../../product/Pending-Products/Components/VerifiedProducts";
import SellerRequests from "../../Sellers/Components/SellerRequests";
import VerifiedSellers from "../../Sellers/Components/VerifiedSellers";
import DashboardHeader from "./Dashboard-header/DashboardHeader";
import DashboardSidebar from "./Dashboard-Sidebar/DashboardSidebar";

export default function Dashboard() {
    return (
        <BrowserRouter>
            <>

                <div className="bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden relative">
                    <div className="flex items-start justify-between">

                        {/* sidebar */}
                        <div>
                            <DashboardSidebar />
                        </div>

                        <div className="flex flex-col w-full md:space-y-4">

                            {/* header */}
                            <div>
                                <DashboardHeader />
                            </div>

                            {/* main */}
                            <div className="overflow-auto h-screen pb-24 px-4 md:px-6">
                                <Switch>
                                    <Route exact path={'/dashboard'} component={ProductCategory} />
                                    <Route exact path={'/dashboard/add-product-form'} component={addProductForm} />
                                    <Route exact path={'/dashboard/product-category'} component={ProductCategory} />
                                    <Route exact path={'/dashboard/pending-products'} component={PendingProducts} />
                                    <Route exact path={'/dashboard/verified-products'} component={VerifiedProducts} />
                                    <Route exact path={'/dashboard/requested-sellers'} component={SellerRequests} />
                                    <Route exact path={'/dashboard/verified-sellers'} component={VerifiedSellers} />
                                </Switch>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        </BrowserRouter>
    );
}