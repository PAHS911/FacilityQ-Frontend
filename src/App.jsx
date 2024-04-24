import { useState } from "react";
import Navbar from './component/Navbar'
import { Facility, Digital, Reshaping, Tracking, } from './section'
function App() {
  return (
    <>
      <main className="font-montserrat">
{/* <Navbar /> */}
<section className="p-9 max-ms:p-3"><Facility/></section>
<section className="p-9 max-ms:p-3"><Reshaping/></section>
<section className="p-9 max-ms:p-3"><Digital/></section>
<section className="p-9 max-ms:p-3"><Tracking/></section>
      </main>
    </>
  );
}

export default App;
 