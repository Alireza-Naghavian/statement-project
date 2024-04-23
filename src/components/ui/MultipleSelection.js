import React, { useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Container from "@mui/material/Container";
function MultipleSelection({ dispatch }) {
  const [selectedValue, setSelectedValue] = useState("");
  const names = [
    { label: "قیمت", value: "price" },
    { label: "تعداد اتاق", value: "rooms" },
    { label: "آدرس", value: "address" },
    { label: "اندازه", value: "size" },
  ];
  const handleChange = (event) => {
    const value = event.target.value
    setSelectedValue(value)
    dispatch({ type: value });
  };
  return (
    <>
      <Container
        className="home-search"
        sx={{
          display: "flex",
          minWidth: "330px",
          width: 1,
          justifyContent: "center",
        }}
      >
        <FormControl sx={{ m: 1, width: 300, mt: "22px" }}>
          <InputLabel
            sx={{ fontFamily: "Dana-Bold", fontSize: "12px" }}
            id="demo-multiple-name-label"
          >
            مرتب سازی بر اساس
          </InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            sx={{ fontFamily: "Dana-Bold", fontSize: "12px" }}
            value={selectedValue}
            onChange={handleChange}
            input={<OutlinedInput label="Name" />}
          >
            {names.map((name) => (
              <MenuItem
                key={name.value}
                value={name.value}
                sx={{ fontFamily: "Dana-Bold", fontSize: "12px" }}
              >
                بر اساس {name.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Container>
    </>
  );
}

export default MultipleSelection;
