import React from 'react'
import PropTypes from 'prop-types'

type Props = {
  logo: string
  phone: string
  message: string
  width: number
  height: number
}

const WhatsappButton = ({ logo, phone, message, width, height }: Props) => {
  const formatMessage = message.replace(/ /g, '20%')

  return (
    <div className="fixed button-2 rigth-2 flex flexColumn z-3000">
      <a
        href={` https://wa.me/${phone}?text=${formatMessage}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={logo} alt={message} width={width} height={height} />
      </a>
    </div>
  )
}

WhatsappButton.prototypes = {
  logo: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
}

WhatsappButton.defaultProps = {
  logo: 'logo.png',
  phone: '3177347667',
  message: 'hola desde el componente directamente',
  width: 100,
  height: 100,
}

WhatsappButton.schema = {
  title: 'boton de whatsapp',
  type: 'object',
  propeties: {
    logo: {
      title: 'logo de whatsapp',
      type: 'string',
      widget: {
        'ui:widget': 'img-uoloader',
      },
    },
    phone: {
      title: 'telefono whatsapp',
      type: 'string',
      description: 'agrega el numero de telefono',
    },
    message: {
      title: 'mensaje de whatsapp',
      type: 'string',
      description: 'agrega el mensaje que quieres para tu cliente',
      widget: {
        'ui:widget': 'textarea',
      },
    },
    width: {
      title: 'ancho del logo',
      type: 'string',
      description: 'agrega el ancho del logo',
    },
    height: {
      title: 'alto delo logo',
      type: 'string',
      description: 'agrega el alto del logo',
    },
  },
}

export default WhatsappButton
