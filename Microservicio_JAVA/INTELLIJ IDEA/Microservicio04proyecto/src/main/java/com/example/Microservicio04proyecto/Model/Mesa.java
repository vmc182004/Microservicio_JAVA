package com.example.Microservicio04proyecto.Model;

import jakarta.persistence.*;
@Entity
@Table(name = "mesa")
public class Mesa {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long QR_MESA;
    @Column
    private String NUM_MESA;
    @Column
    private String ZONA_MESA;


    public long getQR_MESA() {
        return QR_MESA;
    }

    public void setQR_MESA(long QR_MESA) {
        this.QR_MESA = QR_MESA;
    }

    public String getNUM_MESA() {
        return NUM_MESA;
    }

    public void setNUM_MESA(String NUM_MESA) {
        this.NUM_MESA = NUM_MESA;
    }

    public String getZONA_MESA() {
        return ZONA_MESA;
    }

    public void setZONA_MESA(String ZONA_MESA) {
        this.ZONA_MESA = ZONA_MESA;
    }
}
