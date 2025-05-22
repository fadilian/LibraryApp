import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import BookList from "./components/BookList"; 
import AddBook from "./components/AddBook"; 
import EditBook from "./components/EditBook"; 
import BorrowingList from "./components/BorrowingList";
import AddBorrowing from "./components/AddBorrowing";
import EditBorrowing from "./components/EditBorrowing";
import Home from './items/LibraryHome';
import Take from './items/Take';
import Borrow from './items/Borrow';
import Thankyou from './items/Thankyou';
import LibraryHome from './items/LibraryHome';
import RomeoJuliet from "./items/RomeoJuliet";
import HilmyMilan from "./items/HilmyMilan";
import GuaJepang from "./items/GuaJepang";
import KKNDiDesaPenari from "./items/KKNDiDesaPenari";
import KartunKalkulus from "./items/KartunKalkulus";
import TheAlpha from "./items/TheAlpha";
import Akar from "./items/Akar";
import FilosofiTeras from "./items/FilosofiTeras";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Take" element={<Take />} />
        <Route path="/Borrow" element={<Borrow />} />
        <Route path="/Thankyou" element={<Thankyou/>} />
        <Route path="/LibraryHome" element={<LibraryHome/>}/>
        <Route path="/RomeoJuliet" element={<RomeoJuliet />} />
        <Route path="/HilmyMilan" element={<HilmyMilan />} />
        <Route path="/GuaJepang" element={<GuaJepang />} />
        <Route path="/KKNDiDesaPenari" element={<KKNDiDesaPenari />} />
        <Route path="/KartunKalkulus" element={<KartunKalkulus />} />
        <Route path="/TheAlpha" element={<TheAlpha   />} />
        <Route path="/Akar" element={<Akar/>} />
        <Route path="/FilosofiTeras" element={<FilosofiTeras/>} />
        <Route path="/admin/user" element={<UserList />} />
        <Route path="/admin/user/add" element={<AddUser />} />
        <Route path="/admin/user/edit/:id" element={<EditUser />} />
        <Route path="/admin/book" element={<BookList />} /> 
        <Route path="/admin/book/add" element={<AddBook />} /> 
        <Route path="/admin/book/edit/:id" element={<EditBook />} /> 
        <Route path="/admin/borrowing" element={<BorrowingList />} />
        <Route path="/admin/borrowing/add" element={<AddBorrowing />} />
        <Route path="/admin/borrowing/edit/:id" element={<EditBorrowing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
