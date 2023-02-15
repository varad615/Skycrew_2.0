import Link from "next/link";
import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import { Button, Input, Loading, Textarea } from "@nextui-org/react";
import { useRouter } from "next/router";

const NewCourse = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    subtitle: "",
    price: "",
    learn: "",
    vimeo: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  useEffect(() => {
    if (isSubmitting) {
      if (Object.keys(errors).length === 0) {
        alert("success");
        createNote();
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors]);

  const createNote = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/notes", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });
      router.push("/Educator/mycourse");
    } catch (error) {
      console.log(error);
    }
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    let errs = validate();
    setErrors(errs);
    setIsSubmitting(true);
  };
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    let err = {};
    if (!form.title) {
      err.title = "Title required";
    }
    if (!form.description) {
      err.description = "desc required";
    }
    if (!form.subtitle) {
      err.subtitle = "subtitle required";
    }
    if (!form.price) {
      err.price = "price required";
    }
    if (!form.learn) {
      err.learn = "learn required";
    }
    if (!form.vimeo) {
      err.vimeo = "vimeo required";
    }

    return err;
  };
  return (
    <div>
      Create Courses
      <div>
        {isSubmitting ? (
          <Loading />
        ) : (
          <form onSubmit={handlesubmit}>
            Course Title
            <Input
              label="Title"
              placeholder="Title"
              name="title"
              onChange={handleChange}
            />
            <br />
            Course Subtitle
            <Input
              label="Course Subtitle"
              placeholder="Course Subtitle"
              name="subtitle"
              onChange={handleChange}
            />
            <br />
            Course Description
            <Textarea
              label="Desc"
              placeholder="Desc"
              name="description"
              onChange={handleChange}
            />
            <br />
            Course Price
            <Input
              label="Course Price"
              placeholder="Course Price"
              name="price"
              type="number"
              onChange={handleChange}
            />
            <br />
            What will you learn here
            <Input
              label="What will you learn here"
              placeholder="What will you learn here"
              name="learn"
              onChange={handleChange}
            />
            <br />
            <br />
            Course Video Url
            <Input
              placeholder="What will you learn here"
              name="vimeo"
              labelLeft="vimeo"
              onChange={handleChange}
            />
            <br />
            <br />
            <Button type="submit">Upload</Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default NewCourse;
