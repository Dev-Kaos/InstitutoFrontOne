
import { Tabs } from "flowbite-react";
import {
    Button,
    Card,
    Checkbox,
    Label,
    TextInput,
    Table,
    Select,
    Radio,
} from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { VscSave } from "react-icons/vsc";

export function AdminUsuarios() {
    return (
        <div className="p-4">

            <Tabs aria-label="Default tabs" variant="default">
                <Tabs.Item active title="Registrar Usuarios" icon={HiUserCircle}>
                    <div className="grid grid-cols-4 gap-4">
                        <div className="col-span-3 grow ">
                            <Card className="m-4">
                                <div className="grid grid-cols-4 gap-4">
                                    <div className="col-span-2 grow p-4">
                                        <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                            Información Personal
                                        </h5>
                                        <div className="my-4">
                                            <div className="mb-2 block text-gray-500 dark:text-gray-400">
                                                <Label htmlFor="nombreUno" value="Primer Nombre" />
                                            </div>
                                            <TextInput id="nombreUno" type="text" placeholder="daniel" required />
                                        </div>
                                        <div className="my-4">
                                            <div className="mb-2 block text-gray-500 dark:text-gray-400">
                                                <Label htmlFor="ApellidoUno" value="Primer Apellido" />
                                            </div>
                                            <TextInput id="ApellidoUno" type="text" placeholder="perez" required />
                                        </div>
                                        <div className="my-4">
                                            <div className="mb-2 block text-gray-500 dark:text-gray-400">
                                                <Label htmlFor="edad" value="edad" />
                                            </div>
                                            <TextInput id="edad" type="number" placeholder="20" required />
                                        </div>
                                        <div className="max-w-md">
                                            <div className="mb-2 block">
                                                <Label htmlFor="sexo" value="Sexo" />
                                            </div>
                                            <Select id="sexo" required>
                                                <option>Masculino</option>
                                                <option>Femenino</option>
                                            </Select>
                                        </div>
                                        <div className="my-4">
                                            <div className="mb-2 block text-gray-500 dark:text-gray-400">
                                                <Label htmlFor="ApellidoUno" value="Primer Apellido" className="invisible" />
                                            </div>
                                            <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                Cuenta
                                            </h5>
                                        </div>
                                        <div className="my-4">
                                            <div className="mb-2 block text-gray-500 dark:text-gray-400">
                                                <Label htmlFor="usuario" value="Nombre de Usuario" />
                                            </div>
                                            <TextInput id="usuario" type="text" placeholder="Pedrito45..." required />
                                        </div>
                                        <div className="max-w-md">
                                            <div className="mb-2 block">
                                                <Label htmlFor="pregunta" value="Pregunta" />
                                            </div>
                                            <Select id="pregunta" required>
                                                <option>uno</option>
                                                <option>dos</option>
                                            </Select>
                                        </div>
                                        <div className="my-7">
                                            <div className="mb-2 block text-gray-500 dark:text-gray-400">
                                                <Label htmlFor="checkbox1" value="Roles" />
                                            </div>
                                            <div className="flex max-w-md flex-row gap-4" id="checkbox1">
                                                <div className="flex items-center gap-2">
                                                    <Checkbox id="accept" defaultChecked />
                                                    <Label htmlFor="accept" className="flex">
                                                        Administrador
                                                    </Label>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Checkbox id="promotion" />
                                                    <Label htmlFor="promotion">Docente</Label>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Checkbox id="age" />
                                                    <Label htmlFor="age">Estudiante</Label>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Checkbox id="disabled" />
                                                    <Label htmlFor="disabled" >
                                                        Acudiente
                                                    </Label>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-span-2 grow p-4">
                                        <h5 className="invisible mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
                                            Registrar Usuarios
                                        </h5>
                                        <div className="my-4">
                                            <div className="mb-2 block text-gray-500 dark:text-gray-400">
                                                <Label htmlFor="nombreDos" value="Segundo Nombre" />
                                            </div>
                                            <TextInput id="nombreDos" type="text" placeholder="jose" required />
                                        </div>
                                        <div className="my-4">
                                            <div className="mb-2 block text-gray-500 dark:text-gray-400">
                                                <Label htmlFor="ApellidoDos" value="Segundo Apellido" />
                                            </div>
                                            <TextInput id="ApellidoDos" type="text" placeholder="osorio" required />
                                        </div>
                                        <div className="my-4">
                                            <div className="mb-2 block text-gray-500 dark:text-gray-400">
                                                <Label htmlFor="telefono" value="Telefono" />
                                            </div>
                                            <TextInput id="telefono" type="text" placeholder="300111222..." required />
                                        </div>

                                        <div className="my-4">
                                            <div className="mb-2 block text-gray-500 dark:text-gray-400">
                                                <Label htmlFor="correo" value="Correo" />
                                            </div>
                                            <TextInput id="correo" type="text" placeholder="usuario@gmail.com" required />
                                        </div>
                                        <div className="my-4">
                                            <div className="mb-2 block text-gray-500 dark:text-gray-400">
                                                <Label htmlFor="ApellidoUno" value="Primer Apellido" className="invisible" />
                                            </div>
                                            <h5 className=" invisible mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                Información Personal
                                            </h5>
                                        </div>
                                        <div className="my-4">
                                            <div className="mb-2 block text-gray-500 dark:text-gray-400">
                                                <Label htmlFor="apodo" value="Apodo" />
                                            </div>
                                            <TextInput id="apodo" type="text" placeholder="carlos" required />
                                        </div>
                                        <div className="my-4">
                                            <div className="mb-2 block text-gray-500 dark:text-gray-400">
                                                <Label htmlFor="respuesta" value="Respuesta" />
                                            </div>
                                            <TextInput id="respuesta" type="text" placeholder="bla bla bla" required />
                                        </div>
                                        <div className="my-4">
                                            <div className="mb-2 block text-gray-500 dark:text-gray-400">
                                                <Label htmlFor="contra" value="Contraseña" />
                                            </div>
                                            <TextInput id="contra" type="text" placeholder="peluso123" required />
                                        </div>
                                        <div className="my-4">
                                            <div className="mb-2 block text-gray-500 dark:text-gray-400">
                                                <Label htmlFor="" value="guardar" className="invisible" />
                                            </div>
                                            <div className="flex justify-end">

                                                <Button type="submit" gradientDuoTone="purpleToBlue">
                                                    Guardar
                                                    <VscSave className="ml-2 size-5" />
                                                </Button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="grow">
                            <Card className="m-4">
                                <div className="">
                                    <div className=" grow p-4">
                                        <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                            Documento
                                        </h5>
                                        <div className="max-w-md">
                                            <div className="mb-2 block">
                                                <Label htmlFor="tipoDoc" value="Tipo de Documento" />
                                            </div>
                                            <Select id="tipoDoc" required>
                                                <option>Cedula de Ciudadania</option>
                                                <option>Tarjeta de Identidad</option>
                                                <option>Otro</option>
                                            </Select>
                                        </div>
                                        <div className="my-4">
                                            <div className="mb-2 block text-gray-500 dark:text-gray-400">
                                                <Label htmlFor="documento" value="Numero" />
                                            </div>
                                            <TextInput id="documento" type="text" placeholder="1050..." required />
                                        </div>

                                        <div className="my-4">
                                            <div className="mb-2 block text-gray-500 dark:text-gray-400">
                                                <Label htmlFor="fechaExpe" value="Fecha de Expedición" />
                                            </div>
                                            <TextInput id="fechaExpe" type="date" placeholder="1823-" required />
                                        </div>
                                        <div className="my-4">
                                            <div className="mb-2 block text-gray-500 dark:text-gray-400">
                                                <Label htmlFor="lugarExpe" value="Lugar de Expedición" />
                                            </div>
                                            <TextInput id="lugarExpe" type="text" placeholder="Bogota (Cundinamarca)" required />
                                        </div>
                                        <div className="my-4">

                                            <div className="my-4">
                                                <div className="mb-2 block text-gray-500 dark:text-gray-400">
                                                    <Label htmlFor="fechaNaci" value="Fecha de Nacimiento" />
                                                </div>
                                                <TextInput id="fechaNaci" type="date" placeholder="1823-" required />
                                            </div>


                                            <div className="mb-2 block text-gray-500 dark:text-gray-400">
                                                <Label htmlFor="lugarNaci" value="Lugar de Nacimiento" />
                                            </div>
                                            <TextInput id="lugarNaci" type="text" placeholder="Bogota (Cundinamarca)" required />
                                        </div>
                                        <div className="my-4">
                                            <div className="mb-2 block text-gray-500 dark:text-gray-400">
                                                <Label htmlFor="tipoSangre" value="Tipo de Sangre" />
                                            </div>
                                            <TextInput id="tipoSangre" type="text" placeholder="B+" required />
                                        </div>

                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </Tabs.Item>
                <Tabs.Item title="Editar Usuarios" icon={MdDashboard}>
                <div className="grid grid-cols-4 gap-4">
                    <div className="col-span-4">
                    <div className="overflow-x-auto">
      <Table striped hoverable>
        <Table.Head>
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell>Color</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {'Apple MacBook Pro 17"'}
            </Table.Cell>
            <Table.Cell>Sliver</Table.Cell>
            <Table.Cell>Laptop</Table.Cell>
            <Table.Cell>$2999</Table.Cell>
            <Table.Cell>
              <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Edit
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Microsoft Surface Pro
            </Table.Cell>
            <Table.Cell>White</Table.Cell>
            <Table.Cell>Laptop PC</Table.Cell>
            <Table.Cell>$1999</Table.Cell>
            <Table.Cell>
              <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Edit
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Magic Mouse 2</Table.Cell>
            <Table.Cell>Black</Table.Cell>
            <Table.Cell>Accessories</Table.Cell>
            <Table.Cell>$99</Table.Cell>
            <Table.Cell>
              <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Edit
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Google Pixel Phone
            </Table.Cell>
            <Table.Cell>Gray</Table.Cell>
            <Table.Cell>Phone</Table.Cell>
            <Table.Cell>$799</Table.Cell>
            <Table.Cell>
              <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Edit
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Apple Watch 5</Table.Cell>
            <Table.Cell>Red</Table.Cell>
            <Table.Cell>Wearables</Table.Cell>
            <Table.Cell>$999</Table.Cell>
            <Table.Cell>
              <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Edit
              </a>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
                    </div>
                        <div className="col-span-3 grow ">
                            <Card className="m-4">
                                <div className="grid grid-cols-4 gap-4">
                                    <div className="col-span-2 grow p-4">
                                        <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                            Información Personal
                                        </h5>
                                        <div className="my-4">
                                            <div className="mb-2 block text-gray-500 dark:text-gray-400">
                                                <Label htmlFor="nombreUno" value="Primer Nombre" />
                                            </div>
                                            <TextInput id="nombreUno" type="text" placeholder="daniel" required />
                                        </div>
                                        <div className="my-4">
                                            <div className="mb-2 block text-gray-500 dark:text-gray-400">
                                                <Label htmlFor="ApellidoUno" value="Primer Apellido" />
                                            </div>
                                            <TextInput id="ApellidoUno" type="text" placeholder="perez" required />
                                        </div>
                                        <div className="my-4">
                                            <div className="mb-2 block text-gray-500 dark:text-gray-400">
                                                <Label htmlFor="edad" value="edad" />
                                            </div>
                                            <TextInput id="edad" type="number" placeholder="20" required />
                                        </div>
                                        <div className="max-w-md">
                                            <div className="mb-2 block">
                                                <Label htmlFor="sexo" value="Sexo" />
                                            </div>
                                            <Select id="sexo" required>
                                                <option>Masculino</option>
                                                <option>Femenino</option>
                                            </Select>
                                        </div>
                                        <div className="my-4">
                                            <div className="mb-2 block text-gray-500 dark:text-gray-400">
                                                <Label htmlFor="ApellidoUno" value="Primer Apellido" className="invisible" />
                                            </div>
                                            <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                Cuenta
                                            </h5>
                                        </div>
                                        <div className="my-4">
                                            <div className="mb-2 block text-gray-500 dark:text-gray-400">
                                                <Label htmlFor="usuario" value="Nombre de Usuario" />
                                            </div>
                                            <TextInput id="usuario" type="text" placeholder="Pedrito45..." required />
                                        </div>
                                        <div className="max-w-md">
                                            <div className="mb-2 block">
                                                <Label htmlFor="pregunta" value="Pregunta" />
                                            </div>
                                            <Select id="pregunta" required>
                                                <option>uno</option>
                                                <option>dos</option>
                                            </Select>
                                        </div>
                                        <div className="my-7">
                                            <div className="mb-2 block text-gray-500 dark:text-gray-400">
                                                <Label htmlFor="checkbox1" value="Roles" />
                                            </div>
                                            <div className="flex max-w-md flex-row gap-4" id="checkbox1">
                                                <div className="flex items-center gap-2">
                                                    <Checkbox id="accept" defaultChecked />
                                                    <Label htmlFor="accept" className="flex">
                                                        Administrador
                                                    </Label>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Checkbox id="promotion" />
                                                    <Label htmlFor="promotion">Docente</Label>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Checkbox id="age" />
                                                    <Label htmlFor="age">Estudiante</Label>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Checkbox id="disabled" />
                                                    <Label htmlFor="disabled" >
                                                        Acudiente
                                                    </Label>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-span-2 grow p-4">
                                        <h5 className="invisible mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
                                            Registrar Usuarios
                                        </h5>
                                        <div className="my-4">
                                            <div className="mb-2 block text-gray-500 dark:text-gray-400">
                                                <Label htmlFor="nombreDos" value="Segundo Nombre" />
                                            </div>
                                            <TextInput id="nombreDos" type="text" placeholder="jose" required />
                                        </div>
                                        <div className="my-4">
                                            <div className="mb-2 block text-gray-500 dark:text-gray-400">
                                                <Label htmlFor="ApellidoDos" value="Segundo Apellido" />
                                            </div>
                                            <TextInput id="ApellidoDos" type="text" placeholder="osorio" required />
                                        </div>
                                        <div className="my-4">
                                            <div className="mb-2 block text-gray-500 dark:text-gray-400">
                                                <Label htmlFor="telefono" value="Telefono" />
                                            </div>
                                            <TextInput id="telefono" type="text" placeholder="300111222..." required />
                                        </div>

                                        <div className="my-4">
                                            <div className="mb-2 block text-gray-500 dark:text-gray-400">
                                                <Label htmlFor="correo" value="Correo" />
                                            </div>
                                            <TextInput id="correo" type="text" placeholder="usuario@gmail.com" required />
                                        </div>
                                        <div className="my-4">
                                            <div className="mb-2 block text-gray-500 dark:text-gray-400">
                                                <Label htmlFor="ApellidoUno" value="Primer Apellido" className="invisible" />
                                            </div>
                                            <h5 className=" invisible mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                Información Personal
                                            </h5>
                                        </div>
                                        <div className="my-4">
                                            <div className="mb-2 block text-gray-500 dark:text-gray-400">
                                                <Label htmlFor="apodo" value="Apodo" />
                                            </div>
                                            <TextInput id="apodo" type="text" placeholder="carlos" required />
                                        </div>
                                        <div className="my-4">
                                            <div className="mb-2 block text-gray-500 dark:text-gray-400">
                                                <Label htmlFor="respuesta" value="Respuesta" />
                                            </div>
                                            <TextInput id="respuesta" type="text" placeholder="bla bla bla" required />
                                        </div>
                                        <div className="my-4">
                                            <div className="mb-2 block text-gray-500 dark:text-gray-400">
                                                <Label htmlFor="contra" value="Contraseña" />
                                            </div>
                                            <TextInput id="contra" type="text" placeholder="peluso123" required />
                                        </div>
                                        <div className="my-4">
                                            <div className="mb-2 block text-gray-500 dark:text-gray-400">
                                                <Label htmlFor="" value="guardar" className="invisible" />
                                            </div>
                                            <div className="flex justify-end">

                                                <Button type="submit" gradientDuoTone="purpleToBlue">
                                                    Guardar
                                                    <VscSave className="ml-2 size-5" />
                                                </Button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="grow">
                            <Card className="m-4">
                                <div className="">
                                    <div className=" grow p-4">
                                        <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                            Documento
                                        </h5>
                                        <div className="max-w-md">
                                            <div className="mb-2 block">
                                                <Label htmlFor="tipoDoc" value="Tipo de Documento" />
                                            </div>
                                            <Select id="tipoDoc" required>
                                                <option>Cedula de Ciudadania</option>
                                                <option>Tarjeta de Identidad</option>
                                                <option>Otro</option>
                                            </Select>
                                        </div>
                                        <div className="my-4">
                                            <div className="mb-2 block text-gray-500 dark:text-gray-400">
                                                <Label htmlFor="documento" value="Numero" />
                                            </div>
                                            <TextInput id="documento" type="text" placeholder="1050..." required />
                                        </div>

                                        <div className="my-4">
                                            <div className="mb-2 block text-gray-500 dark:text-gray-400">
                                                <Label htmlFor="fechaExpe" value="Fecha de Expedición" />
                                            </div>
                                            <TextInput id="fechaExpe" type="date" placeholder="1823-" required />
                                        </div>
                                        <div className="my-4">
                                            <div className="mb-2 block text-gray-500 dark:text-gray-400">
                                                <Label htmlFor="lugarExpe" value="Lugar de Expedición" />
                                            </div>
                                            <TextInput id="lugarExpe" type="text" placeholder="Bogota (Cundinamarca)" required />
                                        </div>
                                        <div className="my-4">

                                            <div className="my-4">
                                                <div className="mb-2 block text-gray-500 dark:text-gray-400">
                                                    <Label htmlFor="fechaNaci" value="Fecha de Nacimiento" />
                                                </div>
                                                <TextInput id="fechaNaci" type="date" placeholder="1823-" required />
                                            </div>


                                            <div className="mb-2 block text-gray-500 dark:text-gray-400">
                                                <Label htmlFor="lugarNaci" value="Lugar de Nacimiento" />
                                            </div>
                                            <TextInput id="lugarNaci" type="text" placeholder="Bogota (Cundinamarca)" required />
                                        </div>
                                        <div className="my-4">
                                            <div className="mb-2 block text-gray-500 dark:text-gray-400">
                                                <Label htmlFor="tipoSangre" value="Tipo de Sangre" />
                                            </div>
                                            <TextInput id="tipoSangre" type="text" placeholder="B+" required />
                                        </div>

                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </Tabs.Item>
                <Tabs.Item title="Ver Usuarios" icon={HiAdjustments}>
                    This is <span className="font-medium text-gray-800 dark:text-white">Settings tab's associated content</span>.
                    Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                    control the content visibility and styling.
                </Tabs.Item>

            </Tabs>
        </div>
    );
}

export default AdminUsuarios;