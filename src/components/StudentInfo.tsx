import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function StudentInfo() {
  return (
    // Use Drawer component to display student information
    // <div className="flex-1 p-4">
    //   <button className="border border-gray-300 rounded-md px-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
    //     Methas Naisoo
    //   </button>
    // </div>

    <Drawer swipeDirection="left">
      <DrawerTrigger render={<Button variant="secondary" className="bg-blue-600 hover:bg-blue-700 text-white">Methas Naisoo</Button>} />
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>ข้อมูลนักศึกษา</DrawerTitle>
          <DrawerDescription>Student information</DrawerDescription>
        </DrawerHeader>
        <div className="flex-1 p-4 ">

          {/* <div className="size-full rounded-2xl bg-muted" /> */}
          <Card className="relative mx-auto w-full max-w-sm pt-0">
            <div className="absolute inset-0 z-100 aspect-video bg-black/35" />
            <img
              src="/profile.jpg"
              alt="Event cover"
              className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
            />
            <CardHeader>
              <CardAction>
                <Badge variant="secondary">ปี 2</Badge>
              </CardAction>
              <CardTitle>Methas Naisoo</CardTitle>
              <CardDescription>
                นักศึกษา ภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเชียงใหม่
              </CardDescription>
            </CardHeader>

            <div className="m-5 col-2 d-flex align-items-center gap-2">
              <Badge>ปี 2</Badge>
              <p>ชอบดูหนัง เล่นเกม ROV</p>

              <Badge>Email</Badge>
              <p>methas_n@cmu.ac.th</p>

              <Badge>Social</Badge>
              <p>https://www.facebook.com/Methas8353/?locale=th_TH</p>
            </div>

            <CardFooter>
              <h2> รหัสนักศึกษา: 680610708 </h2>
            </CardFooter>
          </Card>

        </div>
        <DrawerFooter>
          <DrawerClose render={<Button>Close</Button>} />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
