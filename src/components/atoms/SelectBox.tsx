import React, { useState, Dispatch, SetStateAction } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import styled from "@emotion/styled";
interface SelectBoxProps {
  items: Array<{
    lable: string;
    value: string;
  }>;
  target: string;
  setTarget: Dispatch<SetStateAction<string>>;
}
function BasicSelect({ items, target, setTarget }: SelectBoxProps) {
  const handleChange = (event: SelectChangeEvent) => {
    setTarget(event.target.value as string);
  };
  const itemList = items.map((item) => (
    <MenuItem value={item.value}>{item.lable}</MenuItem>
  ));
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel>search</InputLabel>
        <Select value={target} label="search" onChange={handleChange}>
          {itemList}
        </Select>
      </FormControl>
    </Box>
  );
}

function SelectBox({ items, target, setTarget }: SelectBoxProps) {
  return (
    <SelectContainer>
      <BasicSelect items={items} target={target} setTarget={setTarget} />
    </SelectContainer>
  );
}
const SelectContainer = styled.div`
  & > .MuiBox-root {
    // background-color: #f5f5f5;
  }
`;

export default SelectBox;
