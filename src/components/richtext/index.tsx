import { useEffect, useMemo, useRef, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
interface RichTextComponentProps {
  content: string;
  change: (t: string) => void;
}

const RichTextComponents = (props: RichTextComponentProps) => {
  const { content, change } = props;

  return (
    <div className="App">
      <h2>Using CKEditor 5 build in React</h2>
      <CKEditor
        editor={ClassicEditor}
        config={{
            extraPlugins: []
            
        }}
        data={content}
        onChange={(event, editor) => {
          const data = editor.getData();
          change(data);
        }}
      />
    </div>
  );
};

export default RichTextComponents;
