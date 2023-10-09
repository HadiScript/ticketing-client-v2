import React, { useContext, useState } from "react";
import ClientLayout from "./components/ClientLayout";
import Breadcrumbs from "../components/Breadcrumbs";
import { IoCreate, IoHome, IoSendOutline } from "react-icons/io5";
import { AuthContext } from "../../context/Auth";
import { PostRequest } from "../Actions/Requests";
import toast from "react-hot-toast";
import { Button, Card, Input } from "antd";
import useAllCategories from "../Actions/Category";
import { useNavigate } from "react-router-dom";

const initValues = {
  title: "",
  description: "",
  category: "",
  priority: "",
};

const Submit = () => {
  const [auth] = useContext(AuthContext);
  const { categories, catsLoading, error } = useAllCategories();
  const router = useNavigate();
  const [formData, setFormData] = useState(initValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.category ||
      !formData.title ||
      !formData.description ||
      !formData.priority
    ) {
      toast.error("All fields are requried");
      return;
    }

    let data = await PostRequest("/add/ticket", formData, auth);

    if (data.ok) {
      setFormData(initValues);
      toast.success("Create created :)");
      router("/client/open-request");
    } else if (data.error) {
      toast.error(data.error);
    }
  };

  return (
    <ClientLayout>
      <Breadcrumbs
        from={"Client"}
        fromPath={"/client"}
        to={"Submit Request"}
        fromIcon={<IoHome className="bread-text" />}
        toIcon={<IoCreate className="bread-text-active" />}
      />
      <Card
        className="cardStyle mt-3"
        // style={{ background: "linear-gradient(45deg, #0b3c913a, #00000033)" }}
      >
        <div className="row">
          <div className="col-md-6">
            <div className="form-group py-2">
              <label for="exampleFormControlInput1"> Title</label>
              <Input
                type="text"
                style={{ border: "none" }}
                placeholder="Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group py-2">
              <label>
                Choose Priority<span className="text-danger">*</span>
              </label>
              <select
                required
                value={formData.priority}
                name="priority"
                onChange={handleChange}
                style={{ width: "100%" }}
                className="form-select"
              >
                <option value="">Choose</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
                <option value="Critical">Critical</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="form-group py-2">
              <label for="exampleFormControlInput1">Description</label>
              <Input.TextArea
                type="text"
                style={{ border: "none" }}
                placeholder="Describe"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group py-2">
              <label>
                Choose Category<span className="text-danger">*</span>{" "}
                {catsLoading && "loading..."}
              </label>
              <select
                required
                value={formData.category}
                name="category"
                onChange={handleChange}
                style={{ width: "100%" }}
                className="form-select"
              >
                <option value="">Choose</option>
                {categories.map((x, index) => (
                  <option key={index} value={x._id}>
                    {x.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <Button
          className="clicks mt-3"
          icon={<IoSendOutline />}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Card>
    </ClientLayout>
  );
};

export default Submit;
