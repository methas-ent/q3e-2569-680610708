import { AddItemDialog } from "./components/AddItemDialog";
import { ItemList } from "./components/ItemList";
import { Footer } from "./components/Footer";
import { OverviewCards } from "./components/OverviewCards";
import { CategoryCards } from "./components/CategoryCards";

import { AppWindowIcon, CodeIcon } from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { useState } from "react";


// // Component
// const OverviewCards = () => <div> Overview Cards Content</div>;
// const CategoryCards = () => <div>Category Cards Content</div>;


export default function App() {

  // 1. สร้าง State สำหรับเก็บค่าแท็บที่เลือก (กำหนดค่าเริ่มต้นเป็น "preview")
  const [activeTab, setActiveTab] = useState("preview");

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-10">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Header Layout wrapper */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                Expenditure Dashboard
              </h1>
              <p className="text-muted-foreground">
                Track your everyday expenses and budget easily.
              </p>
            </div>
            <AddItemDialog />
          </div>

          {/* <Tabs defaultValue="preview">
            <TabsList>
              <TabsTrigger value="preview">
                <AppWindowIcon />

                Overview
              </TabsTrigger>
              <TabsTrigger value="code">
                <CodeIcon />
                By catagory
              </TabsTrigger>
            </TabsList>
          </Tabs> */}

          <div>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger value="preview">
                  <AppWindowIcon className="mr-2 h-4 w-4" /> Overview
                </TabsTrigger>

                {/* ปุ่มที่ 1 (Category) */}
                <TabsTrigger value="code">
                  <CodeIcon className="mr-2 h-4 w-4" /> By category
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="w-full mt-4 p-4 border rounded-xl">
              {activeTab === "code" && <CategoryCards />}
              {activeTab === "preview" && <OverviewCards />}
            </div>
          </div>



          {/* Put OverviewCards and CategoryCards under DashboardTabs */}
          {/* And then use DashboardTabs here instead */}
          {/* <CategoryCards />
          <OverviewCards /> */}
          <ItemList />
        </div>
      </main>

      {/* Footer stays at the very bottom of the viewport if content is short */}
      <Footer />
    </div>
  );
}
