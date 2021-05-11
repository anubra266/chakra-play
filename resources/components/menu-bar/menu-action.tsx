import { Icon, IconButton, IconButtonProps, Tooltip } from "@chakra-ui/react";

interface ActionProps extends Partial<IconButtonProps> {
    title: string;
    icon: any;
}

const MenuAction = (props: ActionProps) => {
    const { icon, title, ...rest } = props;
    return (
        <Tooltip hasArrow label={title} placement="right">
            <IconButton
                w="30px"
                size="sm"
                variant="ghost"
                icon={<Icon as={icon} />}
                aria-label={title}
                {...rest}
            />
        </Tooltip>
    );
};

export default MenuAction;
