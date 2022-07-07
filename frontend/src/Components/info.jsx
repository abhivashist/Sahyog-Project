import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./styleinfo.css";
import Card from "./Cards";

export default function Info() {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios
      .get("http:/localhost:4000/app/getdata")
      .then((res) => setList(res.data))
      .catch((error) => console.log("kuch bhi"));
  }, []);

  return (
    <div className="post" align="center">
      {React.Children.toArray(
        list.map((itm) => {
          return (
            <>
              <Card
                imgsrc={itm.specification}
                title={itm.firstname + " , " + itm.location}
                sname={itm.service}
                num={itm.email}
              />
            </>
          );
        })
      )}
    </div>
  );
}
