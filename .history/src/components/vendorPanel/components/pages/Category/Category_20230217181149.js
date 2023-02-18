import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";

const products = [
  {
    name: "Kids",
  },
  {
    name: "Electronics",
  },
  {
    name: "Hardware",
  },
  {
    name: "Home",
  },
  {
    name: "Wood",
  },
];

const Category = () => {
  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Categories
          </span>
         <Button variant='outline-success'>
          Add Category
         </Button>
        </div>
    

        <div style={{ maxWidth: "100%", overflow: "auto" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Category Image</th>
                <th>Category Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {products.map((i , index) => (
              <tr key={index} >
                <td></td>
                <td> {i.name} </td>
                <td> 
                <div style={{displey : 'flex'}}>
                  <AiFillDelete color="red" cursor={'pointer'}/>
                  <AiFillEdit color="blue" cursor={'pointer'} />
                </div>
                  </td>
              </tr>
            ))}
            </tbody>
        
          </Table>
        </div>
      </section>
    </>
  );
};

export default HOC(Category);
