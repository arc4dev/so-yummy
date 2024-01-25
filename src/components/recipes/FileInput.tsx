import styled from 'styled-components';
import cameraFrame from '../../assets/camera-frame.svg';
import {
  FieldValues,
  UseControllerProps,
  useController,
} from 'react-hook-form';
import { useState } from 'react';
import { ErrorMessage } from './AddRecipeForm';
import { transformErrorMessage } from '../../utils/transformErrorMessage';

const FileInputWrapper = styled.div`
  width: 279px;
  height: 268px;
  overflow: hidden;
  border-radius: 8px;
  position: relative;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--color-action);
  position: relative;
`;

const StyledFileInput = styled.input`
  width: 100%;
  height: 100%;
  position: absolute;
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

const FileInput = <T extends FieldValues>({
  ...controllerProps
}: UseControllerProps<T>) => {
  const {
    field: { onChange },
    fieldState: { error },
  } = useController(controllerProps);

  const [file, setFile] = useState('');

  return (
    <FileInputWrapper>
      <StyledFileInput
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
        <CameraImage src={cameraFrame} alt="Camera frame" />
      </ImageWrapper>
      {error && (
        <ErrorMessage>{transformErrorMessage(error.message)}</ErrorMessage>
      )}
    </FileInputWrapper>
  );
};

export default FileInput;
