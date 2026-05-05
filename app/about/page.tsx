export default function about() {
  const fruits = ["a", "b", "c"];
  const students = [
    { name: "dhanu", age: 20 },
    { name: "sri", age: 30 },
  ];
  const numbers = [1, 2, 3, 4, 5, 6];
  const products = [
  { id: 1, name: "Pen", price: 10 },
  { id: 2, name: "Book", price: 50 },
];
  return (
    <>
      {fruits.map((fruit, index) => (
        <h1 key={index}>
          {index + 1}
          {fruit}
        </h1>
      ))}
      {students.map((student, index) => (
        <h1 key={index}>{student.name}</h1>
      ))}
      {numbers
        .filter((number) => number % 2 === 0)
        .map((number,index ) => (
          <h1 key={index}>{number}</h1>
        ))}
        {
            products.map((product)=>(
                <h1 key={product.id}>{product.name}-₹{product.price}</h1>
            ))
        }
        {
            products.filter((product)=>product.price>20)
            .map((product)=>(
<h1 key={product.id}>{product.name}-{product.price}</h1>
            ))
        }
    </>
  );
}
