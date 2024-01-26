import styled from 'styled-components';
import { FiUser } from 'react-icons/fi';
import {
  FieldValues,
  UseControllerProps,
  useController,
} from 'react-hook-form';
import { useState } from 'react';

import { ErrorMessage } from '../recipes/AddRecipeForm';
import { transformErrorMessage } from '../../utils/transformErrorMessage';

const UserFileInputWrapper = styled.div`
  width: 103px;
  height: 103px;
  position: relative;
  margin: 0 auto;

  &:hover {
    &::after {
      transform: scale(1.1);
    }
  }

  &::after {
    transition: all 150ms ease-in-out;
    content: '+';
    z-index: 1;
    position: absolute;
    bottom: -1px;
    right: 10px;
    width: 25px;
    height: 25px;
    display: flex;
    font-weight: 300;
    justify-content: center;
    align-items: center;
    font-size: 1.65rem;
    border-radius: 50%;
    color: var(--color-white-2);
    background-color: var(--color-action);
  }
`;

const UserIcon = styled(FiUser)`
  font-size: 3.2rem;
  color: var(--color-gray-5);
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  background-color: var(--color-gray-4);
  position: relative;
`;

const StyledUserFileInput = styled.input`
  width: 100%;
  height: 100%;
  position: absolute;
  cursor: pointer;
  opacity: 0;
  z-index: 2;
`;

const CameraImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const FileImage = styled(CameraImage)`
  z-index: 1;
`;

const UserFileInput = <T extends FieldValues>({
  ...controllerProps
}: UseControllerProps<T>) => {
  const {
    field: { onChange },
    fieldState: { error },
  } = useController(controllerProps);

  const [file, setFile] = useState('');

  return (
    <UserFileInputWrapper>
      <StyledUserFileInput
        type="file"
        accept="image/*,.png,.jpg,.web"
        onChange={(e) => {
          if (!e.target.files) return;

          setFile(URL.createObjectURL(e.target.files[0]));

          onChange(e.target.files[0]);
        }}
      />

      <ImageWrapper>
        {file && <FileImage src={file} alt="Uploaded file" />}
        <UserIcon />
      </ImageWrapper>
      {error && (
        <ErrorMessage>{transformErrorMessage(error.message)}</ErrorMessage>
      )}
    </UserFileInputWrapper>
  );
};

export default UserFileInput;
