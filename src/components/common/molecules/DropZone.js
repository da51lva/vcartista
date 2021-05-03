import React, { useCallback, useMemo, useState } from 'react'
import { Box, Flex, Themed, Input, Text } from 'theme-ui'
import { useDropzone } from 'react-dropzone'

const DropZone = (props) => {
  const [files, setFiles] = useState([])

  const { getRootProps, getInputProps, isDragAccept, isDragReject } = useDropzone({
    accept: 'image/*',
    onDrop: useCallback((acceptedFiles) => {
      setFiles((curr) => [...curr, ...acceptedFiles])
    }, []),
  })

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragReject, isDragAccept],
  )

  return (
    <Box {...props}>
      <Themed.ul>
        {files.map((file) => (
          <Themed.li key={file.name}>
            {file.name} {Math.round(file.size / 1000)} KB
          </Themed.li>
        ))}
      </Themed.ul>
      <Flex sx={style} {...getRootProps()}>
        <Input {...getInputProps()} />
        {!isDragAccept && !isDragReject && <Text as='span'>Upload Images</Text>}
        {isDragReject && <Text as='span'>Only Images allowed</Text>}
      </Flex>
    </Box>
  )
}

const baseStyle = {
  alignItems: 'center',
  justifyContent: 'center',
  height: 100,
  borderWidth: 2,
  borderRadius: 2,
  borderColor: 'primary',
  borderStyle: 'dashed',
  backgroundColor: 'light',
  outline: 'none',
  transition: 'all .24s ease-in-out',
  '& > span': {
    color: 'primary',
    fontWeight: 'nav',
    transition: 'all .24s ease-in-out',
  },
  '&:hover': {
    borderColor: '#7c6bc7',
    '& > span': {
      color: '#7c6bc7',
      fontWeight: 'bold',
    },
  },
}

const acceptStyle = {
  borderColor: 'accept',
  backgroundColor: 'acceptLight',
}

const rejectStyle = {
  borderColor: 'reject',
  backgroundColor: 'rejectLight',
  '& > span': {
    color: 'reject',
  },
}

export default DropZone
