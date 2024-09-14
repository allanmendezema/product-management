import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 500, nullable: false })
  nombre: string;

  @Column('text', { nullable: true })
  descripcion: string;

  @Column('decimal', { precision: 10, scale: 2, nullable: false })
  precio: number;

  @Column('int', { nullable: false })
  stock: number;

  @CreateDateColumn()
  fechaCreacion: Date;
}