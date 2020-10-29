import '@testing-library/jest-dom/extend-expect';
import enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import 'mutationobserver-shim'

enzyme.configure({ adapter: new Adapter() });
