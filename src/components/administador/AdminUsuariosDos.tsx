import {
    Button,
    Card,
    Checkbox,
    Label,
    TextInput,

    Select,
    Radio,
} from "flowbite-react";
import { VscSave } from "react-icons/vsc";

export function AdminUsuarios() {
    return (
        <>
            <div className="grid grid-cols-4 gap-4">
                <div className="col-span-3 grow ">
                    <Card className="m-4">
                        <div className="grid grid-cols-4 gap-4">
                            <div className="col-span-2 grow p-4">
                                <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Registrar Usuarios
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
                                        <Label htmlFor="fechaExpe" value="Fecha de Expedición" />
                                    </div>
                                    <TextInput id="fechaExpe" type="date" placeholder="1823-" required />
                                </div>
                                <div className="my-4">
                                    <div className="mb-2 block text-gray-500 dark:text-gray-400">
                                        <Label htmlFor="fechaNaci" value="Fecha de Nacimiento" />
                                    </div>
                                    <TextInput id="fechaNaci" type="date" placeholder="1823-" required />
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
                                        <Label htmlFor="telefono" value="Telefono" />
                                    </div>
                                    <TextInput id="telefono" type="text" placeholder="300111222..." required />
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
                                <div className="my-4">
                                    <div className="mb-2 block text-gray-500 dark:text-gray-400">
                                        <Label htmlFor="usuario" value="Nombre de Usuario" />
                                    </div>
                                    <TextInput id="usuario" type="text" placeholder="Pedrito45..." required />
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
                                            <Checkbox id="disabled"  />
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
                                        <Label htmlFor="documento" value="Documento" />
                                    </div>
                                    <TextInput id="documento" type="text" placeholder="1050..." required />
                                </div>
                                <div className="my-4">
                                    <div className="mb-2 block text-gray-500 dark:text-gray-400">
                                        <Label htmlFor="lugarExpe" value="Lugar de Expedición" />
                                    </div>
                                    <TextInput id="lugarExpe" type="text" placeholder="Bogota (Cundinamarca)" required />
                                </div>
                                <div className="my-4">
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
                                <div className="my-4">
                                    <div className="mb-2 block text-gray-500 dark:text-gray-400">
                                        <Label htmlFor="correo" value="Correo" />
                                    </div>
                                    <TextInput id="correo" type="text" placeholder="usuario@gmail.com" required />
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
                <div className="grow p-4">
                    <Card className="max-w-sm mt-6">
                        <form className="flex flex-col gap-4">
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="email1" value="Your email" />
                                </div>
                                <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="password1" value="Your password" />
                                </div>
                                <TextInput id="password1" type="password" required />
                            </div>
                            <div className="flex items-center gap-2">
                                <Checkbox id="remember" />
                                <Label htmlFor="remember">Remember me</Label>
                            </div>
                            <Button type="submit">Submit</Button>
                        </form>
                    </Card>
                </div>
            </div>
        </>
    );
}
export default AdminUsuarios;