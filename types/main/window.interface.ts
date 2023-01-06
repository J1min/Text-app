export interface WindowType {
  fontSize: number;
  background: string;
  color: string;
  content: string;
}

export interface InputPropsType {
  window: WindowType;
}

export interface FontSizeRangeProps {
  state: WindowType;
  setState: React.Dispatch<React.SetStateAction<WindowType>>;
}
