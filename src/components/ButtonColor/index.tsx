import './styles.css';

type Props =
{
   text: string;
}

export default function ButtonColor({text}: Props)
{
   return (
      <div className="vsc-btn vsc-btn-color">
         {text}
      </div>
   );
}