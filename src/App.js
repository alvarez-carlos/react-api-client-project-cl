import "./App.css";

import { Routes, Route, Navigate } from "react-router-dom";

import {
  HomeScreen,
  TrendsScreen,
  CollectionsScreen,
  TipsAndGuidesScreen,
  StoresScreen,
  ContactScreen,
  CareersScreen,
} from "./pages";

import Layout from "./layout/Layout";

import { TrendsContextProvider } from "./store/trendsContext";
import { CollectionsContextProvider } from "./store/collectionsContext";
import { AboutsContextProvider } from "./store/aboutsContext";
import { StoresContextProvider } from "./store/storesContext";

const App = () => {
  return (
    <TrendsContextProvider>
      <CollectionsContextProvider>
        <AboutsContextProvider>
          <StoresContextProvider>
            <Layout>
              <Routes>
                <Route path="/" element={<HomeScreen />} exact />
                <Route path="/trends" element={<TrendsScreen />} />
                <Route path="/collections" element={<CollectionsScreen />} />
                <Route
                  path="/tips-and-guides"
                  element={<TipsAndGuidesScreen />}
                />
                <Route path="/stores" element={<StoresScreen />} />
                <Route path="/contact" element={<ContactScreen />} />
                <Route path="/careers" element={<CareersScreen />} />
                <Route path="*" element={<Navigate replace to="/" />} />
              </Routes>
            </Layout>
          </StoresContextProvider>
        </AboutsContextProvider>
      </CollectionsContextProvider>
    </TrendsContextProvider>
  );
};

export default App;
