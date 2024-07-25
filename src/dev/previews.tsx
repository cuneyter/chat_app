import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import {Auth} from "../components/auth/Auth";

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree/>}>
      <ComponentPreview path="/Auth">
        <Auth/>
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;
