import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";

const products = [
  {
    image : "data:image/jpeg;base64,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"
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
                <div style={{display : 'flex'}}>
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
