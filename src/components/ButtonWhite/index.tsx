import './styles.css';

type Props =
{
   text: string;
}

export default function ButtonWhite({text}: Props)
{
   return(
      <div className="vsc-btn vsc-btn-white">
         {text}
      </div>
   );
}