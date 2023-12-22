import React, { useState } from "react";
import { storage, db } from "../config/Config";

const Addproducts = () => {
  const [productName, setProductName] = useState("");
  const [productImg, setProductImg] = useState(null);
  const [productCategory, setProductCategory] = useState("");
  const [productALT, setProductALT] = useState("");
  const [productSize, setProductSize] = useState("");

  const [error, setError] = useState("");

  const types = ["image/png", "image/jpeg"];

  const productImgHandler = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile && types.includes(selectedFile.type)) {
      setProductImg(selectedFile);
      setError("");
    } else {
      setProductImg(null);
      setError("Plese select a image of type PNG or JPEG.");
    }
  };

  const addProduct = (e) => {
    e.preventDefault();
    const uploadTask = storage
      .ref(`product-images/${productImg.name}`)
      .put(productImg);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
      },
      (err) => {
        setError(err.message);
      },
      () => {
        // getting product url and if success then storing the product in db
        storage
          .ref("product-images")
          .child(productImg.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("Products")
              .add({
                ProductName: productName,
                ProductCategory: productCategory,
                ProductALT: productALT,
                ProductSize: productSize,
                ProductImg: url,
              })
              .then(() => {
                setProductName("");
                setProductCategory("");
                setProductALT("");
                setProductSize("");
                setProductImg(null);
                setError("");
                document.getElementById("file").value = "";
              })
              .catch((err) => setError(err.message));
          });
      }
    );
  };

  return (
    <div className="container">
      <br />
      <h2>ADD PRODUCTS</h2>
      <hr />
      <form autoComplete="off" className="form-group" onSubmit={addProduct}>
        <label htmlFor="product-name">Product Name</label>
        <br />
        <input
          id="product-name"
          type="text"
          className="form-control"
          required
          onChange={(e) => setProductName(e.target.value)}
          value={productName}
        />
        <label htmlFor="product-Category">Product Category</label>
        <br />
        <select
          id="product-Category"
          className="form-control"
          required
          onChange={(e) =>
            setProductCategory(
              Array.from(e.target.selectedOptions, (option) => option.value)
            )
          }
          value={productCategory}
          multiple
        >
          <option value="Birthday-Cakes">Birthday Cakes</option>
          <option value="Anniversary-Cakes">Anniversary Cakes</option>
          <option value="Kids-Cakes">Kids Cakes</option>
          <option value="Baby-Shower-Cakes">Baby Shower Cakes</option>
          <option value="Sugar-Free-Cakes">Sugar Free Cakes</option>
          <option value="Cup-Cakes">Cup Cakes</option>
          <option value="Engagement-Cakes">Engagement Cakes</option>
          <option value="Heart-Shaped-Cakes">Heart Shaped Cakes</option>
          <option value="Theme-Cakes">Theme Cakes</option>
          <option value="6-Month-Birthday-Cakes">
            Six Month Birthday Cakes
          </option>
          <option value="Valentines-Day-Cakes">Valentines Day Cakes</option>
          <option value="Wedding-Cakes">Wedding Cakes</option>
          <option value="customized-chocolate">Customized Chocolate</option>
        </select>

        <label htmlFor="product-ALT">Product ALT</label>
        <br />
        <input
          id="product-ALT"
          type="text"
          className="form-control"
          required
          onChange={(e) => setProductALT(e.target.value)}
          value={productALT}
        />

        <label htmlFor="product-size">Product Size </label>
        <select
          id="product-Size"
          className="form-control"
          required
          onChange={(e) =>
            setProductSize(
              Array.from(e.target.selectedOptions, (option) => option.value)
            )
          }
          value={productSize}
          multiple
        >
          <option value="250g">250 gram cake</option>
          <option value="500g">500 gram cake</option>
          <option value="1kg">1 kg cake</option>
          <option value="1.5kg">1.5 kg cake</option>
          <option value="2kg">2 kg cake</option>
          <option value="2.5kg">2.5 kg cake</option>
          <option value="3kg">3 kg cake</option>
          <option value="3.5kg">3.5 kg cake</option>
          <option value="4kg">4 kg cake</option>
          <option value="4.5kg">4.5 kg cake</option>
          <option value="5kg">5 kg cake</option>
          <option value="5.5kg">5.5 kg cake</option>
          <option value="6kg">6 kg cake</option>
          <option value="6.5kg">6.5 kg cake</option>
          <option value="7kg">7 kg cake</option>
          <option value="7.5kg">7.5 kg cake</option>
          <option value="8kg">8 kg cake</option>
          <option value="8.5kg">8.5 kg cake</option>
          <option value="9kg">9 kg cake</option>
          <option value="9.5kg">9.5 kg cake</option>
          <option value="10kg">10 kg cake</option>
          <option value="10.5kg">10.5 kg cake</option>
        </select>
        <label htmlFor="product-img">Product Image</label>
        <input
          id="product-img"
          type="file"
          className="form-control"
          onChange={productImgHandler}
        />
        <button id="file" className="btn btn-success  btn-nd mytbtn">
          Add File
        </button>
      </form>
      {error && <span>{error}</span>}
    </div>
  );
};

export default Addproducts;
