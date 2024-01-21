import styled from 'styled-components';
import cameraFrame from '../../assets/camera-frame.svg';
import { ControllerProps, FieldValues, useController } from 'react-hook-form';
import { useState } from 'react';

const FileInputWrapper = styled.div`
  width: 279px;
  height: 268px;
  border-radius: 8px;
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
}: ControllerProps<T>) => {
  const {
    field: { onChange },
  } = useController(controllerProps);

  const [file, setFile] = useState('');

  return (
    <FileInputWrapper>
      <StyledFileInput
        type="file"
        accept="image/*,.png,.jpg,.web"
        onChange={(e) => {
          setFile(URL.createObjectURL(e.target.files[0]));

          onChange(e.target.files[0]);
        }}
      />

      <ImageWrapper>
        {file && <FileImage src={file} alt="Uploaded file" />}
        <CameraImage src={cameraFrame} alt="Camera frame" />
      </ImageWrapper>
    </FileInputWrapper>
  );
};

export default FileInput;
