import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProductCategory from "../../Product-Category/Components/ProductCategory";
import addProductForm from "../../product/Add-Product-Form/Components/addProductForm";
import Navbar from "../../shared-components/Dashboard-Navbar/Components/DashboardNavbar";
import Sidebar from "../../shared-components/Dashboard-Sidebar/Components/DashboardSidebar";

export default function Dashboard() {
    return (
        <>
            <Sidebar />
            <div className="relative md:ml-64 bg-blueGray-100">
                <Navbar />
                {/* Header */}
                <div className="relative bg-blue-500 md:pt-32 pb-2 pt-12">
                    <div className="px-4 md:px-10 mx-auto w-full">

                    </div>
                </div>
                <div className="pt-8">

                    <div className="">
                        <Switch>
                            <Route exact path={'/dashboard/add-product-form'} component={addProductForm} />
                            <Route exact path={'/dashboard/product-category'} component={ProductCategory} />
                        </Switch>
                    </div>

                </div>
            </div>
        </>
    );
}