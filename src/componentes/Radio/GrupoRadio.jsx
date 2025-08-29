import Radio from "./Radio"

const GrupoRadio = ({ opcoes, valor, onchange }) => {
    return (
        <div>
            {opcoes.map((option) => (
                <Radio
                    key={option.valor}
                    valor={option.valor}
                    label={option.label}
                    checked={option.valor === valor}
                    onclick={() => onchange(option.valor)}
                />
            ))}
        </div>
    )
}

export default GrupoRadio